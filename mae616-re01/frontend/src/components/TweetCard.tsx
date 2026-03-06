/** TweetCardのProps */
export type TweetCardProps = {
  /** アバターの背景色（CSS color） */
  avatarColor: string;
  /** ユーザー表示名 */
  userName: string;
  /** ユーザーハンドル（@付き） */
  userHandle: string;
  /** 投稿からの経過時間（例: "・2時間"） */
  timeAgo: string;
  /** 投稿本文 */
  body: string;
};

/**
 * ツイート/投稿表示カード
 * アバター＋ヘッダー（名前/ハンドル/時間）＋本文
 */
export function TweetCard({
  avatarColor,
  userName,
  userHandle,
  timeAgo,
  body,
}: TweetCardProps) {
  return (
    <article className="flex gap-5 px-6 py-5 border-b border-border-default">
      {/* アバター */}
      <div
        className="w-(--avatar-sm) h-(--avatar-sm) rounded-full shrink-0"
        style={{ backgroundColor: avatarColor }}
        aria-hidden="true"
      />

      {/* コンテンツ */}
      <div className="flex flex-col min-w-0">
        {/* ヘッダー: 名前・ハンドル・時間 */}
        <div className="flex items-center gap-3">
          <span className="text-md font-bold text-text-primary truncate">
            {userName}
          </span>
          <span className="text-md text-text-secondary truncate">
            {userHandle}
          </span>
          <span className="text-md text-text-secondary whitespace-nowrap">
            {timeAgo}
          </span>
        </div>

        {/* 本文 */}
        <p className="text-md text-text-primary leading-relaxed mt-2">
          {body}
        </p>
      </div>
    </article>
  );
}
