/** UserRowの表示状態 */
export type UserRowState = "default" | "following" | "self";

/** UserRowのProps */
export type UserRowProps = {
  /** アバターの背景色（CSS color） */
  avatarColor: string;
  /** ユーザー表示名 */
  userName: string;
  /** ユーザーハンドル（@付き） */
  userHandle: string;
  /** 表示状態（default: 未フォロー / following: フォロー中 / self: 自分） */
  state?: UserRowState;
};

/**
 * ユーザー一覧の行
 * アバター＋ユーザー情報＋フォローボタン
 * self状態ではフォローボタンを非表示にする
 */
export function UserRow({
  avatarColor,
  userName,
  userHandle,
  state = "default",
}: UserRowProps) {
  return (
    <div
      role="listitem"
      className="flex items-center gap-5 px-6 py-5 border-b border-border-default"
    >
      {/* アバター */}
      <div
        className="w-(--avatar-md) h-(--avatar-md) rounded-full shrink-0"
        style={{ backgroundColor: avatarColor }}
        aria-hidden="true"
      />

      {/* ユーザー情報 */}
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-md font-bold text-text-primary truncate">
          {userName}
        </span>
        <span className="text-sm text-text-secondary truncate">
          {userHandle}
        </span>
      </div>

      {/* フォローボタン（self時は非表示） */}
      {state !== "self" && (
        <button
          type="button"
          aria-pressed={state === "following"}
          className={`rounded-full w-(--follow-btn-width) h-(--follow-btn-height) text-sm font-bold shrink-0 cursor-pointer ${
            state === "following"
              ? "bg-transparent border border-btn-outline-border text-btn-outline-text"
              : "bg-btn-primary-bg text-btn-primary-text border-none"
          }`}
        >
          {state === "following" ? "フォロー中" : "フォロー"}
        </button>
      )}
    </div>
  );
}
