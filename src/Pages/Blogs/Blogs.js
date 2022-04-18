import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-4'>
            <h2 className='text-center my-3'>Blogs</h2>
            <div className="row">

                <div className="col-10 m-2 card text-white bg-dark mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">Difference between authorization and authentication ?</h5>
                        <p className="card-text"><strong>Authorization</strong> is the process to giving permission to do something. It can be a resource or it can be a job. When somebody have power of authorization. He authorize people to access resource. Like you own a room. People needs your permission to access your room. You authorize people to access your room. A permission becomes right when it is assigned to someone. <strong>Authentication</strong> is the process to recognize someone's identity. For example, When someone try to access a website's resource. Sometimes He have to login to the system. He gives his identity(email,username,password) to the system. The system examine his identity. If his identity is not valid. He can't access to the system. If his identity is valid, He can access to the system. The Whole process is called Authentication.</p>
                    </div>
                </div>
                <div className="col-10 m-2 card text-white bg-dark mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h5>
                        <p className="card-text">Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. The main reason for using firebase because it is a Google-backed application. The security that google provides is top-class. Hosting is safe when it's came from Google. Google firebase provides multi-platform authentication. Other options to implement authentication are Okta, AuthO, MongoDB, Passport etc. Okta provides secure user authentication. Okta claims The World Number One Identity Platform. The reason people choose okta because they have a strong partnership with Microsoft. AuthO is also an authentication and authorization platform. AuthO provides cloud-based identity platform for developers.</p>
                    </div>
                </div>
                <div className="col-10 m-2 card text-white bg-dark mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">What other services does firebase provide other than authentication ?</h5>
                        <p className="card-text">There are many services that firebase provides other than authentication. Firebase can push notification to your mobile phone. Firebase can implement notification. Google analytics comes with firebase. Google analytics can make reports after analyzing your website. It can track a website's traffic. After analyzing your website it can make predication about your products. Firebase provides dynamic links. This service can generate dynamic links to redirect user to your landing page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;