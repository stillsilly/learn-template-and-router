/**
 * Created by windows on 2017/7/24.
 */

export default r => require.ensure([], () => {
    r(require('./Article.vue'))
}, 'articlebundle');


/*
* 这样也行
*
* */
// const Article = r => require.ensure([], () => {
//     r(require('./Article.vue'))
// }, 'articlebundle')
//
// export default Article






/*
* 或者这样
*
* */
// export const Article = r => require.ensure([], () => {
//     r(require('./Article.vue'))
// }, 'articlebundle')

/*
*router.js里导入的时候用 import  Article from './component/article/bundle.Article'
*而不是import  Article from './component/article/bundle'
*
*
* 或者用import * as Article from './component/article/bundle'
* 然后const ArticleTrending = Article.Article 下面就能用这个组件了
* */