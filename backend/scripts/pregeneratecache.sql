-- Create cached_answers table for pre-generated responses
CREATE TABLE IF NOT EXISTS cached_answers (
    id SERIAL PRIMARY KEY,
    query_text TEXT NOT NULL UNIQUE,
    answer TEXT NOT NULL,
    sources JSONB NOT NULL,
    metadata JSONB,
    confidence VARCHAR(20),
    response_time_ms INTEGER,
    model VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for fast lookups
CREATE INDEX IF NOT EXISTS idx_cached_answers_query ON cached_answers(query_text);

-- Create index for metadata queries
CREATE INDEX IF NOT EXISTS idx_cached_answers_metadata ON cached_answers USING gin(metadata);

COMMENT ON TABLE cached_answers IS 'Pre-generated answers for common queries in Explore tab';
COMMENT ON COLUMN cached_answers.query_text IS 'Exact query text used as cache key';
COMMENT ON COLUMN cached_answers.sources IS 'JSON array of source documents with metadata';
COMMENT ON COLUMN cached_answers.metadata IS 'Additional metadata like category, topic, etc.';

-- Made with Bob
