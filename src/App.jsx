import React from 'react';
import { RotateCcw, Trophy } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import baseCards from './cards.js';

function normalizeAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[;,.!?]+$/g, '')
    .replace(/\s+/g, ' ');
}

function sanitizeCommandInput(value) {
  return value.replace(/[\u2013\u2014]/g, '--');
}

function shuffleCards(cards) {
  return [...cards].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [cards, setCards] = useState(baseCards);
  const [cardIndex, setCardIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState('test');
  const [attemptResult, setAttemptResult] = useState(null);
  const [eligibleForMastery, setEligibleForMastery] = useState(false);
  const [firstTryCorrectCardIds, setFirstTryCorrectCardIds] = useState([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const activeCard = cards[cardIndex];
  const isFirstCard = cardIndex === 0;
  const isLastCard = cardIndex === cards.length - 1;
  const totalCards = baseCards.length;
  const masteredCount = masteredCards.length;
  const progressCount = totalCards - cards.length;
  const displayedCurrentStreak = Math.min(currentStreak, totalCards);
  const displayedLongestStreak = Math.min(longestStreak, totalCards);

  const progressLabel = useMemo(() => {
    if (cards.length === 0) {
      return 'All cards mastered';
    }

    return `Card ${cardIndex + 1} of ${cards.length}`;
  }, [cardIndex, cards.length]);

  function resetCardState(nextIndex = cardIndex) {
    setCardIndex(nextIndex);
    setGuess('');
    setFeedback(null);
    setStatusMessage('');
    setIsFlipped(false);
    setAttemptResult(null);
    setEligibleForMastery(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!activeCard || !guess.trim()) {
      return;
    }

    const normalizedGuess = normalizeAnswer(guess);
    const isCorrect = activeCard.answers.some((answer) => {
      const normalizedAnswer = normalizeAnswer(answer);
      return normalizedGuess === normalizedAnswer || normalizedGuess.startsWith(`${normalizedAnswer} `);
    });

    if (isCorrect && attemptResult === null && !firstTryCorrectCardIds.includes(activeCard.id)) {
      const nextStreak = currentStreak + 1;
      setCurrentStreak(nextStreak);
      setLongestStreak(Math.max(longestStreak, nextStreak));
      setFeedback('correct');
      setStatusMessage('');
      setAttemptResult('correct');
      setEligibleForMastery(true);
      setFirstTryCorrectCardIds([...firstTryCorrectCardIds, activeCard.id]);
    } else if (isCorrect) {
      setFeedback('correct');
      setStatusMessage('Already checked. Streak only counts first-try correct answers.');
      if (firstTryCorrectCardIds.includes(activeCard.id)) {
        setEligibleForMastery(true);
      }
    } else {
      setCurrentStreak(0);
      setFeedback('incorrect');
      setStatusMessage('');
      if (attemptResult === null) {
        setAttemptResult('incorrect');
      }
    }
  }

  function handleNavigation(direction) {
    const nextIndex = cardIndex + direction;
    if (nextIndex >= 0 && nextIndex < cards.length) {
      resetCardState(nextIndex);
    }
  }

  function handleShuffle() {
    const seenCards = cards.slice(0, cardIndex + 1);
    const unseenCards = cards.slice(cardIndex + 1);
    setCards([...seenCards, ...shuffleCards(unseenCards)]);
    setStatusMessage(`Shuffling Complete ${new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })}`);
  }

  function handleReset() {
    setCards(baseCards);
    setMasteredCards([]);
    setCurrentStreak(0);
    setLongestStreak(0);
    setAttemptResult(null);
    setEligibleForMastery(false);
    setFirstTryCorrectCardIds([]);
    resetCardState(0);
  }

  function handleMastered() {
    if (!activeCard) {
      return;
    }

    if (!eligibleForMastery) {
      setStatusMessage('Mastery locked: answer correctly on the first try first.');
      return;
    }

    setMasteredCards([...masteredCards, activeCard]);
    const remainingCards = cards.filter((card) => card.id !== activeCard.id);
    setCards(remainingCards);
    resetCardState(Math.min(cardIndex, Math.max(remainingCards.length - 1, 0)));
  }

  function handleModeChange(nextMode) {
    setMode(nextMode);
    setIsFlipped(false);
  }

  function getModeLabel(targetMode) {
    const isActive = mode === targetMode;
    const checkbox = isActive ? '[X]' : '[ ]';
    const label = targetMode === 'test' ? 'Test Mode' : 'Learn Mode';
    return `${checkbox} ${label}${isActive ? ' (active)' : ''}`;
  }

  useEffect(() => {
    function handleKeyboardShortcuts(event) {
      if (event.ctrlKey && event.key.toLowerCase() === 't') {
        event.preventDefault();
        handleShuffle();
        return;
      }

      if (event.ctrlKey && event.key.toLowerCase() === 'y') {
        event.preventDefault();
        handleMastered();
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handleNavigation(-1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNavigation(1);
      }
    }

    window.addEventListener('keydown', handleKeyboardShortcuts);
    return () => window.removeEventListener('keydown', handleKeyboardShortcuts);
  }, [activeCard, attemptResult, cardIndex, cards, eligibleForMastery, firstTryCorrectCardIds, masteredCards]);

  if (!activeCard) {
    return (
      <main className="app-shell">
        <section className="win-layout" aria-label="Completed Git command trainer">
          <p className="terminal-path">user@web102:~/git-trainer$</p>

          <header className="app-header">
            <div className="title-box">
              <h1>Git Command Trainer</h1>
              <p>Practice Git commands. Build muscle memory. Level up.</p>
            </div>
            <div className="win-stats terminal-box" aria-label="Completion stats">
              <span>Mastered: {masteredCount} / {totalCards}</span>
              <span>Current Streak: {displayedCurrentStreak}</span>
              <span>Longest Streak: {displayedLongestStreak}</span>
              <span>Status: Complete</span>
            </div>
          </header>

          <section className="win-content">
            <pre className="trophy-art" aria-hidden="true">{String.raw`
              ___________
           '._==_==_=_.'
           .-\:      /-.
          | (|:.     |) |
           '-|:.     |-'
             \::.    /
              '::. .'
                ) (
              _.' '._
             \`"""""""\`
`}</pre>

            <div className="win-message">
              <div className="win-banner">* ALL COMMANDS MASTERED *</div>
              <p>Congratulations. You have mastered every command in this deck.</p>
              <p>Your Git skills are leveling up.</p>
              <button className="primary-button reset-button" onClick={handleReset}>
                <RotateCcw size={18} aria-hidden="true" />
                Reset Trainer
              </button>
            </div>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <section className="trainer-layout" aria-label="Git command flashcard trainer">
        <p className="terminal-path">user@web102:~/git-trainer$</p>

        <header className="app-header">
          <div className="title-box">
            <h1>Git Command Trainer</h1>
            <p>Practice Git commands. Build muscle memory. Level up.</p>
          </div>
          <div className="streak-panel terminal-box" aria-label="Answer streaks">
            <strong>STREAKS</strong>
            <span>Current: {displayedCurrentStreak}</span>
            <span>Longest: {displayedLongestStreak}</span>
          </div>
        </header>

        <div className="mode-switch" aria-label="Practice mode">
          <button
            type="button"
            className={mode === 'test' ? 'active' : ''}
            aria-pressed={mode === 'test'}
            onClick={() => handleModeChange('test')}
          >
            {getModeLabel('test')}
          </button>
          <button
            type="button"
            className={mode === 'learn' ? 'active' : ''}
            aria-pressed={mode === 'learn'}
            onClick={() => handleModeChange('learn')}
          >
            {getModeLabel('learn')}
          </button>
        </div>

        <section className="instructions" aria-label="Instructions">
          <h2>INSTRUCTIONS</h2>
          <ol>
            <li>Read the scenario below.</li>
            <li>Type the correct git command after the prompt.</li>
            <li>Press Enter or select submit to check your answer.</li>
            <li>Switch to Learn Mode to click a card and reveal its answer.</li>
            <li>Use ArrowRight or ArrowLeft to navigate cards.</li>
            <li>Use Ctrl+T to shuffle unseen cards. Use Ctrl+Y to mark a card mastered.</li>
          </ol>
        </section>

        <p className="progress-line">[{progressLabel}]</p>

        <div className={`terminal-card ${feedback ?? ''} ${isFlipped ? 'flipped' : ''} ${mode}`}>
          <button
            className="card-face"
            type="button"
            onClick={() => {
              if (mode === 'learn') {
                setIsFlipped(!isFlipped);
              }
            }}
            disabled={mode === 'test'}
            aria-label={
              mode === 'learn'
                ? isFlipped
                  ? 'Show scenario'
                  : 'Reveal explanation'
                : 'Card is locked in test mode'
            }
          >
            {!isFlipped ? (
              <div className="terminal-body">
                <p className="label">SCENARIO:</p>
                <span className="label-underline">---------</span>
                <p className="scenario">{activeCard.prompt}</p>
                <p>What git command should you use?</p>
              </div>
            ) : (
              <div className="terminal-body back">
                <p className="label">ANSWER:</p>
                <span className="label-underline">-------</span>
                <code>{activeCard.command}</code>
                <p>{activeCard.explanation}</p>
              </div>
            )}
          </button>
        </div>

        <form id="command-form" className="command-form" onSubmit={handleSubmit}>
          <div className={`input-row ${feedback ?? ''}`}>
            <label htmlFor="command-input">user@web102:~/git-trainer$</label>
            <input
              id="command-input"
              value={guess}
              onChange={(event) => {
                setGuess(sanitizeCommandInput(event.target.value));
                setFeedback(null);
                setStatusMessage('');
              }}
              placeholder="type here"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck="false"
            />
            <button className="visually-hidden" type="submit">
              Submit Command
            </button>
          </div>
          <p className={`feedback ${feedback ?? ''}`} aria-live="polite">
            {feedback === 'correct' && 'command accepted'}
            {feedback === 'incorrect' && 'command not found'}
          </p>
          <p className="command-note" aria-live="polite">
            {statusMessage || 'Note: modern Git favors switch and restore over older branch-changing and unstaging workflows. Use double hyphens exactly, like git restore --staged file.txt.'}
          </p>
        </form>

        <footer className="control-bar">
          <button type="button" onClick={() => handleNavigation(-1)} disabled={isFirstCard}>
            ArrowLeft Back
          </button>
          <button type="submit" form="command-form">
            [Enter] Submit
          </button>
          <button type="button" onClick={() => handleNavigation(1)} disabled={isLastCard}>
            ArrowRight Next
          </button>
          <button type="button" onClick={handleShuffle}>
            [Ctrl+T] Shuffle Unseen
          </button>
          <button type="button" onClick={handleMastered}>
            [Ctrl+Y] Mark Mastered
          </button>
        </footer>

        <aside className="status-footer" aria-label="Mastered cards and progress">
          <div className="mastered-list">
            <strong>MASTERED COMMANDS ({masteredCount})</strong>
            <span>{masteredCount ? masteredCards.map((card) => card.command).join(', ') : '(none yet)'}</span>
          </div>
          <div className="progress-meter">PROGRESS: {progressCount} / {totalCards}</div>
        </aside>
      </section>
    </main>
  );
}
