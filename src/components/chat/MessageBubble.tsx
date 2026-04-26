// Inside MessageBubble.tsx
const renderContent = (content: string) => {
  if (content.includes('PLAN:')) {
    const sections = content.split(/(INTENT:|PLAN:|RESULT:)/g);
    return (
      <div className={styles.agentView}>
        {sections.map((part, i) => (
          <p key={i} className={part.match(/INTENT:|PLAN:|RESULT:/) ? styles.label : ''}>
            {part}
          </p>
        ))}
      </div>
    );
  }
  return content;
};