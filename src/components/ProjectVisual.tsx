export default function ProjectVisual({ slug }: { slug: string }) {
  return (
    <div className={`project-visual visual-${slug}`} aria-hidden="true">
      {slug === 'translator-pipeline' && (
        <div className="pipeline-art">
          <div className="language-card">
            <span className="visual-label">ONE STORY</span>
            <span className="language-letter">
              Aa<span>↗</span>
            </span>
            <div className="visual-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
          <span className="pipeline-arrow">→</span>
          <div className="audio-card">
            <span className="visual-label">MANY VOICES</span>
            <div className="waveform">
              {[18, 34, 25, 48, 36, 58, 28, 44, 20, 34, 16].map((height, i) => (
                <i key={i} style={{ height }} />
              ))}
            </div>
            <div className="language-list">
              EN <span>FR</span> 中文
            </div>
          </div>
        </div>
      )}
      {slug === 'howse' && (
        <div className="recipe-art">
          <div className="recipe-note">
            <span className="visual-label">A LITTLE INSPIRATION</span>
            <span className="recipe-script">What’s cooking?</span>
            <div className="ingredient-tags">
              <span>Something fresh</span>
              <span>Something good</span>
            </div>
          </div>
          <div className="plate">
            <div className="plate-inner">
              <span className="leaf leaf-one" />
              <span className="leaf leaf-two" />
              <span className="leaf leaf-three" />
              <span className="tomato tomato-one" />
              <span className="tomato tomato-two" />
              <span className="pasta pasta-one" />
              <span className="pasta pasta-two" />
              <span className="pasta pasta-three" />
            </div>
          </div>
        </div>
      )}
      {slug === 'mini-gpt' && (
        <div className="model-art">
          <div className="model-top">
            <span>
              <i />
              <i />
              <i />
            </span>
            <span>an experiment in language</span>
          </div>
          <div className="token-row">
            <span>hello</span>
            <span>,</span>
            <span>world</span>
            <b>↵</b>
          </div>
          <div className="model-code">
            <span>curiosity</span> + <span>context</span>
            <br />
            <span className="model-output">
              → one token at a time<span className="cursor-mark">▌</span>
            </span>
          </div>
        </div>
      )}
      {slug === 'chrome-paragraph' && (
        <div className="writing-art">
          <div className="browser-art">
            <div className="browser-art-top">
              <span>
                <i />
                <i />
                <i />
              </span>
              <span className="browser-address">
                a little help finding the words
              </span>
            </div>
            <div className="writing-page">
              <span className="writing-title">A thought, continued.</span>
              <div className="visual-lines">
                <i />
                <i />
              </div>
              <div className="suggestion">
                <span>✳</span>
                <div className="visual-lines">
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
