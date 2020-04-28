import React from "react";

export class BlogPage extends React.Component {
    render () {
        return (
            <div className="container BlogView">
                <header className="BlogHeader py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="text-muted" href="#">Suscribe</a>
                        </div>
                        <div className="col-4 text-center">
                            <a className="blogHeader text-dark" href="#">Blog</a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
} 