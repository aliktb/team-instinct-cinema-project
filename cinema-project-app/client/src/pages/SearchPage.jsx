import { useState } from "react";
import Search from "../Components/Search";
import { Card, CardBody, CardTitle, CardGroup } from 'reactstrap';


const SearchPage = () => {

    const [results, setResults] = useState([]);

    if (results.length > 0) {

        const card = results.map((movies) => {

            console.log(movies)
            return (
                <span>
                    <Card body colour="primary" outline style={{ maxWidth: "20rem", height: "25rem" }} className="m-2">
                        {/* <CardImg alt={movies.title} top width="100%" /> */}
                        <CardBody>
                            
                            <CardTitle tag="h5">{movies.title}</CardTitle>
                            <CardTitle tag="h5">{movies.tags}</CardTitle>
                            <CardTitle tag="h5">{movies.rating}</CardTitle>
                            <CardTitle tag="h5">{movies.runtime}</CardTitle>
                            <CardTitle tag="h5">{movies.release}</CardTitle>
                            
                        </CardBody>
                    </Card>
                </span>
            );
        });

        return (
            <div className="page-container">
                <Search setResults={setResults} />
                <div>
                    <CardGroup>
                        <>{card}</>
                    </CardGroup>
                </div>
            </div>
        );
    } else {

        return (
            <div className="page-container">
                <Search setResults={setResults} />
            </div>
        );
    }
}

export default SearchPage;