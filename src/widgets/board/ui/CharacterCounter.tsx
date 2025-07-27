interface CharacterCounterProps {
  currentLength: number;
  maxCharacters: number;
}

export const CharacterCounter = ({ currentLength, maxCharacters }: CharacterCounterProps) => {
  return (
    <div aria-live='polite' aria-atomic='true' style={{ fontSize: '0.875rem', color: '#666' }}>
      {currentLength}/{maxCharacters}
    </div>
  );
};
