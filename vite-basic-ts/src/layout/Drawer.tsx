import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export const Drawer = (props: { open: boolean | undefined; setOpen: (arg0: boolean) => void; }) => {

    return (
        <div>
            <div className="card">
                <Sidebar visible={props.open} onHide={() => props.setOpen(false)}>
                    <h3>Left Sidebar</h3>
                </Sidebar>

            </div>
        </div>
    )
}
