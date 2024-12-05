import React from 'react';
import { Offcanvas } from 'react-bootstrap';

interface OffCanvasComponentProps {
    isOpen: boolean;
    onToggle: () => void;
}
const OffCanvasComponent: React.FC<OffCanvasComponentProps> = ({ isOpen, onToggle }) => {

    return <Offcanvas show={isOpen} onHide={onToggle}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sidebar</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    This is the off-canvas sidebar content.
                </Offcanvas.Body>
            </Offcanvas>
};

export default OffCanvasComponent;