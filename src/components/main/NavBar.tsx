import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu, MenuProps } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppState } from "../../store";
import { Category } from "../../types/main";

function NavBar() {
  const kategoriler = useSelector(
    (state: AppState) => state.main.data.kategoriler
  );
  
  const header = useSelector( (state: AppState) => state.main.data.header);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigation = useNavigate();
  const location = useLocation();
  const locationArray = location?.pathname.split("/");
  let activePath = "";
  (locationArray[1] === "makale") ? 
    activePath = "kategori/"+locationArray[2] 
    : 
      (locationArray[3]) ? 
      activePath = "kategori/"+locationArray[2]
      :      
      activePath = location.pathname.slice(1, location.pathname.length);

  (!activePath) ? activePath = "/" : activePath = activePath+"" ;
  
  const onClick: MenuProps['onClick'] = e => {
    navigation(e.key);
    onClose();
  };

  const MenuItem = (kategori: Category[], show: any, place: string) => {
    let items_ = [] as ItemType[];
    let item_sub = [] as ItemType[];
    let item = {} as ItemType;

    Object.entries(kategoriler)
      .sort((a, b) => parseInt(a[1].sira) - parseInt(b[1].sira))
      .map(([key, name], i) => {
        if (name.gorunum_yeri === place) {
          if (name.alt_kategoriler && name.alt_kategoriler.length !== 0) {
            item = { label: name.baslik, key: name.sayfa_tag, children: [] };

            
              Object.entries(name.alt_kategoriler).map(
                ([alt_key, alt_name], i) => {
                  let sub = { label: alt_name.baslik, key: alt_name.sayfa_tag };
                  item_sub.push(sub);
                  return null;
                }
              );
            

            item = { ...item, children: item_sub };
            items_.push(item);
          } else {
            item = { label: name.baslik, key: name.sayfa_tag };
            items_.push(item);
          }
        }
        return null;
      });

    return <Menu onClick={onClick} selectedKeys={[activePath]} mode={show} items={items_} />;
  };

  return (
    <nav className="navBar">
      <div className="container">
        <div className="mainMenu">
          {(header) &&
                <div className="menuLogo">
                  <img src={header.icon} alt={header.title} />
                </div>
          }
          <Button
            onClick={showDrawer}
            className="menuButton"
            size="large"
            icon={<MenuOutlined />}
          ></Button>
          <Drawer
            title="Menu"
            placement={"left"}
            width={300}
            onClose={onClose}
            open={open}
          >
            {kategoriler && MenuItem(kategoriler, "inline", "menu")}
          </Drawer>
          <div className="horizontalMenu">
            {kategoriler && MenuItem(kategoriler, "horizontal", "ust")}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
