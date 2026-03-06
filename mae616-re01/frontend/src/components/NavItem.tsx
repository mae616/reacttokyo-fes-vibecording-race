import type { LucideIcon } from "lucide-react";

/** NavItemの表示状態 */
export type NavItemState = "default" | "active";

/** NavItemのProps */
export type NavItemProps = {
  /** lucide-reactのアイコンコンポーネント */
  icon: LucideIcon;
  /** ナビゲーションラベル */
  label: string;
  /** 表示状態（default: 通常 / active: 選択中） */
  state?: NavItemState;
  /** リンク先URL */
  href: string;
};

/**
 * サイドバーのナビゲーション項目
 * active/default状態でスタイルが切り替わる
 */
export function NavItem({
  icon: Icon,
  label,
  state = "default",
  href,
}: NavItemProps) {
  const isActive = state === "active";

  return (
    <a
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-6 rounded-full px-6 py-5 h-(--nav-item-height) transition-colors ${
        isActive
          ? "bg-surface-active-nav text-text-primary font-bold"
          : "text-text-secondary font-normal hover:bg-surface-hover"
      }`}
    >
      <Icon size={24} />
      <span className="text-xl">{label}</span>
    </a>
  );
}
