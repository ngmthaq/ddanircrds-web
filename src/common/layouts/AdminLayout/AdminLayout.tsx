import React, { FC } from "react";
import { AdminLayoutContext, type AdminLayoutContextType } from "./AdminLayout.context";
import { BaseLayout, type BaseLayoutProps } from "../BaseLayout";

export type AdminLayoutProps = BaseLayoutProps & {};

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  const AdminLayoutContextValue: AdminLayoutContextType = {};

  return (
    <BaseLayout>
      <AdminLayoutContext.Provider value={AdminLayoutContextValue}>
        <div id="admin-layout">{children}</div>
      </AdminLayoutContext.Provider>
    </BaseLayout>
  );
};
