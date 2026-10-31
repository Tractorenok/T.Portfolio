type SheetProps = {
  children: React.ReactNode;
  tone?: "a" | "b";
  hero?: boolean;
};

/**
 * Один «лист» стопки. На .sheet-paper вешается transform из --cover,
 * .sheet-shade (тень входящего края) живёт вне трансформируемого слоя.
 */
export default function Sheet({ children, tone = "a", hero = false }: SheetProps) {
  return (
    <div
      className={`sheet sheet-full tone-${tone} ${hero ? "sheet-hero" : ""}`.trim()}
      data-sheet
    >
      {!hero && <div className="sheet-shade" aria-hidden="true" />}
      <div className="sheet-paper">
        {!hero && <div className="sheet-rim" aria-hidden="true" />}
        <div className="sheet-body">{children}</div>
        <div className="sheet-dim" aria-hidden="true" />
      </div>
    </div>
  );
}
