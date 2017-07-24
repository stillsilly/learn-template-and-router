/**
 * Created by windows on 2017/7/24.
 */

export default r => require.ensure([],()=>{
    r(require('./Exhibition.vue'))
})