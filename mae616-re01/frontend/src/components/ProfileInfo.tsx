/** ProfileInfoのProps */
export type ProfileInfoProps = {
  /** ユーザー表示名 */
  name: string;
  /** ユーザーハンドル（@付き） */
  handle: string;
  /** フォロー中の数（表示用文字列） */
  followingCount: string;
  /** フォロワーの数（表示用文字列） */
  followerCount: string;
  /** アバターの背景色（CSS color） */
  avatarColor?: string;
};

/**
 * プロフィール情報セクション
 * カバー画像、アバター、名前、ハンドル、フォロー統計を表示
 */
export function ProfileInfo({
  name,
  handle,
  followingCount,
  followerCount,
  avatarColor = "#9ED4F5",
}: ProfileInfoProps) {
  return (
    <div>
      {/* カバー画像 */}
      <div
        className="h-(--cover-photo-height) bg-surface-cover-photo"
        aria-hidden="true"
      />

      {/* プロフィール情報 */}
      <div className="px-6 pb-5">
        {/* アバター（カバーに重なる） */}
        <div
          className="w-(--avatar-lg) h-(--avatar-lg) rounded-full border-4 border-white -mt-10"
          style={{ backgroundColor: avatarColor }}
          aria-hidden="true"
        />

        {/* 名前・ハンドル */}
        <div className="mt-3">
          <p className="text-xl font-extrabold text-text-primary m-0">
            {name}
          </p>
          <p className="text-md text-text-secondary m-0">
            {handle}
          </p>
        </div>

        {/* フォロー統計 */}
        <div className="flex gap-7 mt-5">
          <span>
            <span className="text-sm font-bold text-text-primary">
              {followingCount}
            </span>
            <span className="text-sm text-text-secondary ml-2">
              フォロー中
            </span>
          </span>
          <span>
            <span className="text-sm font-bold text-text-primary">
              {followerCount}
            </span>
            <span className="text-sm text-text-secondary ml-2">
              フォロワー
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
