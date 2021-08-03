import { Card, CardBody } from "reactstrap";
function Header({ name , title})
{
    return(
        <div>
            <Card className="my-1 bg-warning">
                <CardBody className="my-1">
                    <h1>{ title }</h1>
                    <h1>Learn code with { name }</h1>
                    <p>This is header component for learning purpose</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header;