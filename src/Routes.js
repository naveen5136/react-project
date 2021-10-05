import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
const home= React.lazy(()=> import('./share/Home'));
const header= React.lazy(()=> import('./share/Header'));
const dashboard= React.lazy(()=> import('./Components/dashboard/dashboard'));
const signin= React.lazy(()=> import ('./Components/dashboard/signin/signin'))

const Routes = withRouter(({location}) => {
const routes=[
    {
        components:home,
        path:'/',
    },
    {
        components:header,
        path:'/header',
    },
    {
        components:dashboard,
        path:'/dashboard',
    },
    {
        components:signin,
        path:'/signin',
    }
]
return (
    <Switch location={location}>
        {routes.map((route)=> {
            console.log(route)
                return (
                    <Route 
                    exact 
                    key={route.path}
                    path={route.path}
                    component={route.components} 
                    />            
                );
            })
        }
    </Switch>
);
 } ) 
export default Routes;