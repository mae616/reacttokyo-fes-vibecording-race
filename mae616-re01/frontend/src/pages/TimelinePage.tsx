import { AppLayout } from "../layouts/AppLayout";
import { PageHeader } from "../components/PageHeader";
import { ComposeArea } from "../components/ComposeArea";
import { TweetCard } from "../components/TweetCard";

/**
 * タイムライン画面
 * フォロー中ユーザー＋自分の投稿を時系列で表示
 */
export function TimelinePage() {
  return (
    <AppLayout activeNav="home">
      <PageHeader title="ホーム" />
      <ComposeArea />

      <TweetCard
        avatarColor="#9ED4F5"
        userName="田中太郎"
        userHandle="@tanaka"
        timeAgo="・2時間"
        body="React Tokyo Fesに参加してきました！とても勉強になりました。次回も楽しみです 🎉"
      />
      <TweetCard
        avatarColor="#F5C49E"
        userName="佐藤花子"
        userHandle="@sato_hanako"
        timeAgo="・5時間"
        body="TypeScriptとPrismaの組み合わせが最高すぎる。型安全なDB操作は一度体験すると戻れない。"
      />
      <TweetCard
        avatarColor="#B5E6A3"
        userName="鈴木一郎"
        userHandle="@suzuki"
        timeAgo="・8時間"
        body="Viteのビルド速度にはいつも驚かされます。HMRも爆速で開発体験が全然違う。"
      />
    </AppLayout>
  );
}
