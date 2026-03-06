/** TabBarの表示状態 */
export type TabBarState = "active" | "default";

/** TabBarのProps */
export type TabBarProps = {
  /** タブのラベル */
  label: string;
  /** 表示状態（active: 選択中 / default: 非選択） */
  state?: TabBarState;
};

/**
 * タブバー
 * 投稿タブなど画面内セクション切り替え用
 */
export function TabBar({
  label,
  state = "active",
}: TabBarProps) {
  const isActive = state === "active";

  return (
    <div
      role="tablist"
      className="flex items-center justify-center h-(--header-height) border-b border-border-default"
    >
      <button
        type="button"
        role="tab"
        aria-selected={isActive}
        className="relative flex flex-col items-center justify-center h-full px-6 bg-transparent border-none cursor-pointer"
      >
        <span className="text-md font-bold text-text-primary">
          {label}
        </span>
        {isActive && (
          <div className="absolute bottom-0 w-(--tab-indicator-width) h-(--tab-indicator-height) bg-brand-primary rounded-sm" />
        )}
      </button>
    </div>
  );
}
