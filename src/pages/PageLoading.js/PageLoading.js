import React from 'react';
import LoadingImage from '../../assets/images/loading.gif'

const PageLoading = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${LoadingImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
            }}
        >
        </section>
    );
};

export default PageLoading;