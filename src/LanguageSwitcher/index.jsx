import { Avatar, Dropdown, Typography } from 'antd';

const { Text } = Typography;
export const BASE_URL = import.meta.env.BASE_URL
const path = `${BASE_URL}`;
function LanguageSwitcher({ lang, languages, onClick }) {
    function getFlag(lang) {
        return (
            <>
                <Avatar
                    shape="circle"
                    src={`${path}${lang}.png`}
                />
            </>
        );
    }
    const menuItems = languages.map(item => ({
        key: item.lang,
        label: item.label,
        icon: getFlag(item.lang),
    }));
    const SelectedLang = languages.find(item => item.lang === lang);
    return (
        <div className="LanguageSwitcher">
            <Dropdown menu={{
                items: menuItems,
                onClick: ({ key }) => onClick(key)
            }}>
                <div style={{ cursor: "pointer" }}>
                    <Avatar  shape="circle"
                        style={{
                            marginRight: 10,
                        }}
                        src={`${path}${lang}.png`} />
                    <Text style={{
                        display: 'inline-block',
                        width: '2em',
                    }}>{SelectedLang.label}</Text>
                </div>
            </Dropdown>
        </div>
    );
}

export default LanguageSwitcher;
