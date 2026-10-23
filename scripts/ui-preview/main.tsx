import { installMockApi } from './mock-api'

// The mock must exist before the app's modules read window.api at import time.
installMockApi()

await import('../../src/main.tsx')
