import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../LayOut/Dashboard";
// import AdminLayout from "../LayOut/AdminLayout/AdminLayout";
import Main from "../LayOut/Main";
import About from "../pages/About/About";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import AddBlog from "../pages/Dashboard/AddBlog";
import BlogList from "../pages/Dashboard/BlogList";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import EditBlog from "../pages/Dashboard/EditBlog";
import Message from "../pages/Dashboard/Message";
import Subscriber from "../pages/Dashboard/Subscriber";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ReadingHistory from "../pages/ReadingHistory/ReadingHistory";
import AdminRoute from "./AdminRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogDetails/:id',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/history',
                element: <ReadingHistory></ReadingHistory>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/admin@saefty/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/addBlog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/dashboard/blogList',
                element: <BlogList></BlogList>
            },
            {
                path: '/dashboard/message',
                element: <Message></Message>
            },
            {
                path: '/dashboard/editBlog/:id',
                element: <EditBlog></EditBlog>
            },
            {
                path: '/dashboard/subscriberList',
                element: <Subscriber></Subscriber>
            }
        ]
    }
])

export default router