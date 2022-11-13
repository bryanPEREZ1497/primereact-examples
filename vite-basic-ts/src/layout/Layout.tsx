import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menubar } from './Menubar';
import { Drawer } from './Drawer';



function Layout(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; })  {

    const [openDrawer, setOpenDrawer] = useState(false);
    return (
    <div className="App">
        <Menubar setOpen={setOpenDrawer} />
        <Drawer open={openDrawer} setOpen={setOpenDrawer}  />
        {props.children}
    </div>
  );
}

export default Layout;
