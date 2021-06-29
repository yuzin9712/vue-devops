import PostDetail from '../../src/components/PostDetail.vue';


describe('PostDetail', () => {
  it('has a created hook', () => {
    expect(typeof PostDetail.created).toBe('function')
  })
})