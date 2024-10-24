import { describe, it, expect } from 'vitest';
import { useResults } from'../src/utils/useResults';
import { renderHook, waitFor } from '@testing-library/react';


describe('test useResults hook', () => {
    it('should return results', async () => {
        const { result } = renderHook(() => useResults('hk001'));
        await waitFor (() => expect(result.current.results).toHaveLength(1));
    })
})