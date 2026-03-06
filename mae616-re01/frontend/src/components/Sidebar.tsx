import { Bird, House, Users, User } from "lucide-react";
import { NavItem } from "./NavItem";
import type { NavItemState } from "./NavItem";

/** サイドバーのナビゲーションキー */
export type NavKey = "home" | "users" | "profile";

/** SidebarのProps */
export type SidebarProps = {
  /** 現在アクティブなナビゲーション項目 */
  activeNav: NavKey;
};

/** ナビゲーション定義（順序・アイコン・ラベル・パス） */
const NAV_ITEMS: {
  key: NavKey;
  icon: typeof House;
  label: string;
  href: string;
}[] = [
  { key: "home", icon: House, label: "ホーム", href: "/" },
  { key: "users", icon: Users, label: "ユーザー", href: "/users" },
  { key: "profile", icon: User, label: "プロフィール", href: "/profile/1" },
];

/**
 * 左サイドバー。ロゴ＋ナビゲーション項目を含む共通レイアウト
 */
export function Sidebar({ activeNav }: SidebarProps) {
  return (
    <nav
      aria-label="メインナビゲーション"
      className="flex flex-col gap-2 bg-surface-card w-(--sidebar-width) py-6 px-5 h-full"
    >
      {/* ロゴ */}
      <div className="flex items-center gap-3 px-6 py-5">
        <Bird size={28} className="text-brand-primary" />
        <span className="text-2xl font-extrabold text-brand-primary">
          つぶやき
        </span>
      </div>

      {/* ナビゲーション項目 */}
      {NAV_ITEMS.map(({ key, icon, label, href }) => (
        <NavItem
          key={key}
          icon={icon}
          label={label}
          href={href}
          state={(activeNav === key ? "active" : "default") as NavItemState}
        />
      ))}
    </nav>
  );
}
