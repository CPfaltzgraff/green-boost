---
to: infra/src/back-end-stack.ts
---

import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import {
  AuthorizationType,
  FieldLogLevel,
  GraphqlApi,
} from "@aws-cdk/aws-appsync-alpha";
import { Stage, UserBase, UserManagement } from "gboost-infra";
import { groups } from "../../common/src/groups.js";
import { userAttributes } from "../../common/src/userAttributes.js";
import { NagSuppressions } from "cdk-nag";

export interface BackEndStackProps extends StackProps {
  stage: Stage;
  email?: string;
}

export class BackEndStack extends Stack {
  awsRegion = new CfnOutput(this, "AwsRegionOutput", {
    value: Stack.of(this).region,
  });
  gqlUrl!: CfnOutput;
  userPoolId!: CfnOutput;
  userPoolClientId!: CfnOutput;

  constructor(scope: Construct, id: string, props: BackEndStackProps) {
    super(scope, id, props);
    const { email, stage } = props;

    const userBase = new UserBase(this, "UserBase", {
      defaultGroupName: "User",
      email,
      groups,
      stage,
      standardAttributes: userAttributes,
    });
    this.userPoolId = new CfnOutput(this, "UserPoolIdOutput", {
      value: userBase.userPool.userPoolId,
    });
    this.userPoolClientId = new CfnOutput(this, "UserPoolClientIdOutput", {
      value: userBase.userPoolClient.userPoolClientId,
    });

    const gqlApi = new GraphqlApi(this, "GqlApi", {
      name: `${stage}-gql-api`,
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: AuthorizationType.USER_POOL,
          userPoolConfig: {
            userPool: userBase.userPool,
          },
        },
      },
      logConfig: {
        excludeVerboseContent: false,
        fieldLogLevel: FieldLogLevel.ERROR,
      },
    });
    NagSuppressions.addResourceSuppressions(
      gqlApi,
      [
        {
          id: "AwsSolutions-IAM4",
          reason:
            "AWS Managed Policy is not overly permissive for AWSAppSyncPushToCloudWatchLogsRole",
        },
      ],
      true
    );

    this.gqlUrl = new CfnOutput(this, "GqlUrlOutput", {
      value: gqlApi.graphqlUrl,
    });

    new UserManagement(this, "UserManagement", {
      api: gqlApi,
      userPoolId: userBase.userPool.userPoolId,
      groupNames: groups.map((g) => g.groupName),
      adminGroupNames: ["Admin"],
      stage,
    });
  }
}
