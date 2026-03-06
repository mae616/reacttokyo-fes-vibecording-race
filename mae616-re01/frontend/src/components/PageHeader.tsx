import { ArrowLeft } from "lucide-react";

/** PageHeaderのバリアント */
export type PageHeaderVariant = "default" | "withBack";

/** PageHeaderのProps */
export type PageHeaderProps = {
  /** ページタイトル */
  title: string;
  /** 表示バリアント（default: タイトルのみ / withBack: 戻るボタン付き） */
  variant?: PageHeaderVariant;
  /** 戻るボタン押下時のコールバック（variant="withBack"時に使用） */
  onBack?: () => void;
};

/**
 * 画面上部のヘッダー
 * variant="withBack"で戻るボタンを表示する
 */
export function PageHeader({
  title,
  variant = "default",
  onBack,
}: PageHeaderProps) {
  return (
    <div className="flex items-center gap-3 h-(--header-height) px-6 border-b border-border-default">
      {variant === "withBack" && (
        <button
          type="button"
          aria-label="戻る"
          onClick={onBack}
          className="p-3 rounded-full hover:bg-surface-hover cursor-pointer bg-transparent border-none"
        >
          <ArrowLeft size={20} className="text-text-primary" />
        </button>
      )}
      <h1 className="text-xl font-bold text-text-primary m-0">
        {title}
      </h1>
    </div>
  );
}
