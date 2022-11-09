import { BreadcrumbData } from "use-react-router-breadcrumbs"

export const activeLink = (breadcrumb: BreadcrumbData<string>[], link: string) =>{
    if(breadcrumb && breadcrumb.length > 1 && breadcrumb[1].key === link){
        return "sidebar-link active"
    }

    return "sidebar-link"
}