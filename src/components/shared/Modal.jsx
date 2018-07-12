import React, {Component, createRef} from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0,0,0,0.2);
`;

const Content = styled.div`
    background-color: #ffffff;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
    min-height: 300px;
`;

const BtnClose = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export default class Modal extends Component {

    backdropRef = createRef();

    componentDidMount = () => {
        window.addEventListener('click', this.handleWindowClick)
    };

    componentWillUnmount = () => {
        window.removeEventListener('click', this.handleWindowClick)
    };

    handleWindowClick = e => {
        if (e.target !== this.backdropRef.current) {
            return;
        }

        this.props.onClose();
    };

    render() {
        const {isOpen, children, onClose} = this.props;

        return (isOpen ? (
            <Backdrop ref={backdropRef}>
                <Content><BtnClose onClick={onClose}>X</BtnClose>{children}</Content>
            </Backdrop>
        ) : null);

// other way to show on depends isOpen
        /* isOpen && (
            <Backdrop>
                <Content>{children}</Content>
            </Backdrop>
        ) */

    }


}
