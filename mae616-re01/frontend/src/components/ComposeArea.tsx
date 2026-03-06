/**
 * 投稿入力エリア
 * アバター＋テキスト入力＋投稿ボタン
 */
export function ComposeArea() {
  return (
    <div className="flex gap-5 px-6 py-5 h-(--compose-height) border-b border-border-default">
      {/* 閲覧者アバター */}
      <div
        className="w-(--avatar-sm) h-(--avatar-sm) rounded-full shrink-0 bg-brand-light"
        aria-hidden="true"
      />

      {/* 入力エリア＋ボタン */}
      <div className="flex flex-col flex-1 justify-between">
        <textarea
          className="text-lg text-text-primary placeholder:text-text-tertiary resize-none border-none outline-none bg-transparent flex-1"
          placeholder="いまどうしてる？"
          aria-label="投稿内容を入力"
        />
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-brand-primary text-text-inverse rounded-full w-(--compose-btn-width) h-(--compose-btn-height) text-md font-bold cursor-pointer border-none"
          >
            投稿する
          </button>
        </div>
      </div>
    </div>
  );
}
