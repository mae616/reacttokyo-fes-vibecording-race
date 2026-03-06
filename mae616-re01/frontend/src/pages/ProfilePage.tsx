import { AppLayout } from "../layouts/AppLayout";
import { PageHeader } from "../components/PageHeader";
import { ProfileInfo } from "../components/ProfileInfo";
import { TabBar } from "../components/TabBar";
import { TweetCard } from "../components/TweetCard";

/**
 * プロフィール画面
 * ユーザー情報＋投稿一覧を表示
 */
export function ProfilePage() {
  return (
    <AppLayout activeNav="profile">
      <PageHeader title="田中太郎" variant="withBack" />

      <ProfileInfo
        name="田中太郎"
        handle="@tanaka"
        followingCount="12"
        followerCount="8"
      />

      <TabBar label="投稿" state="active" />

      <TweetCard
        avatarColor="#9ED4F5"
        userName="田中太郎"
        userHandle="@tanaka"
        timeAgo="・2時間"
        body="React Tokyo Fesに参加してきました！とても勉強になりました。次回も楽しみです 🎉"
      />
      <TweetCard
        avatarColor="#9ED4F5"
        userName="田中太郎"
        userHandle="@tanaka"
        timeAgo="・1日前"
        body="新しいプロジェクトを始めました。Vite + React + TypeScriptの構成で開発していきます！"
      />
    </AppLayout>
  );
}
