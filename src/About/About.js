import React from 'react';

export class About extends React.Component {
    render() {
        return (
            <span>About Sepideh</span>
        );
    }
}

function privateCallMe() {
    alert('calling Sepideh...');
}
export function CallMe() {
    privateCallMe();
};
