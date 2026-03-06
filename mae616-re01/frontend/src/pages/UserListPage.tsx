import { AppLayout } from "../layouts/AppLayout";
import { PageHeader } from "../components/PageHeader";
import { UserRow } from "../components/UserRow";

/**
 * ユーザー一覧画面
 * 全ユーザーを表示し、フォロー/アンフォロー操作ができる
 */
export function UserListPage() {
  return (
    <AppLayout activeNav="users">
      <PageHeader title="ユーザー" />

      <div role="list">
        <UserRow
          avatarColor="#9ED4F5"
          userName="田中太郎"
          userHandle="@tanaka"
          state="self"
        />
        <UserRow
          avatarColor="#F5C49E"
          userName="佐藤花子"
          userHandle="@sato_hanako"
          state="default"
        />
        <UserRow
          avatarColor="#B5E6A3"
          userName="鈴木一郎"
          userHandle="@suzuki"
          state="following"
        />
        <UserRow
          avatarColor="#D4A5F5"
          userName="山田次郎"
          userHandle="@yamada_jiro"
          state="default"
        />
        <UserRow
          avatarColor="#F5E6A3"
          userName="高橋美咲"
          userHandle="@takahashi_m"
          state="default"
        />
      </div>
    </AppLayout>
  );
}
