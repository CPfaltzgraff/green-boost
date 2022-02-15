---
to: ui/src/pages/pages.tsx
---

import type { Page } from "gboost-ui";
import { styled, UserManagement } from "gboost-ui";
<% if (features.includes("demoDashboard")) { -%>
import { MdDashboard } from "react-icons/md";
import { Dashboard } from "./Dashboard/Dashboard.jsx";
<% } -%>
<% if (features.includes("userManagement")) { -%>
import { groups } from "common/groups";
import { MdManageAccounts } from "react-icons/md";
<% } -%>
<% if (features.includes("userManagement")) { -%>

const groupNames = groups.map((g) => g.groupName);
const StyledManageAccounts = styled(MdManageAccounts, { fontSize: "$7" });
<% } -%>
<% if (features.includes("demoDashboard")) { -%>

const StyledDashboard = styled(MdDashboard, { fontSize: "$7" });
<% } -%>

// Use Code Splitting for non-default pages with React.lazy
export const pages: Page[] = [
  <% if (features.includes("demoDashboard")) { %>
  {
    component: <Dashboard />,
    icon: <StyledDashboard />,
    name: "Dashboard",
    path: "/dashboard",
  },
  <% } %>
  <% if (features.includes("userManagement")) { %>
  {
    component: <UserManagement groupNames={groupNames} />,
    icon: <StyledManageAccounts />,
    name: "User Management",
    path: "/user-management",
  },
  <% } %>
];
