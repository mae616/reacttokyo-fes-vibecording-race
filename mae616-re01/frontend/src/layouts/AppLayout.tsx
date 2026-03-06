import type { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

/**
 * アプリ共通レイアウト
 * Sidebar（固定幅）＋メインコンテンツ（flex-1）の2カラム構成
 */
export function AppLayout({
  activeNav,
  children,
}: {
  activeNav: "home" | "users" | "profile";
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen bg-surface-page">
      <Sidebar activeNav={activeNav} />
      <main className="flex flex-col flex-1 bg-surface-card border-l border-border-default overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
