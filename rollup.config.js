export default {
  input: ['dbp-1.js', 'dbp-1.js', 'dbp-activity-showcase.js'],
  output: {
    dir: 'dist',
    format: 'esm'
  },
  experimental: {
    chunkOptimization: true,
  }
};