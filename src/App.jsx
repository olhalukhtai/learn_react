import React from 'react'
import { Route } from 'react-router'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ArticlesPage from './pages/ArticlesPage'
import ReviewsPage from './pages/ReviewsPage'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<ArticlesPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="reviews" element={<ReviewsPage/>}/>
            </Route>
        </Routes>
    )
}

export default App