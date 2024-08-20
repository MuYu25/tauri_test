import {Component} from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import NotFoundPage from "../viwes/NotFoundPage";
import IndexPage from "../viwes/index";

class MainRouter extends Component{
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/index" element={<IndexPage/>}>
                        
                    </Route>
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default MainRouter;