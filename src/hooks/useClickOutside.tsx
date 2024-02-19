import { useRef, useEffect, Dispatch, SetStateAction, RefObject } from 'react';

type MenuRefType = HTMLDivElement | null;

interface MenuConfig {
    ref: RefObject<MenuRefType>;
    setToggle: Dispatch<SetStateAction<boolean>>;
}


export const useClickOutside = (disableClose = false) => {

    const menus = useRef<MenuConfig[]>([]);
    const disableMenuRef = useRef(true);

    useEffect(() => {
        setTimeout(() => {
            disableMenuRef.current = false;
        }, 500);
    }, []);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!disableMenuRef.current && menus.current.length > 0) {
                for (const { ref } of menus.current) {
                    if (ref.current && ref.current.contains(event.target as Node)) {
                        return; // Click was inside a menu, do not toggle
                    }
                }
                // Click was outside all menus, toggle all menus
                for (const { setToggle } of menus.current) {
                    if (!disableClose) { setToggle((prev) => !prev); }
                }
            }
        };

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, [disableClose]);


    // add the menu
    const addMenu = (ref: RefObject<MenuRefType>, setToggle: Dispatch<SetStateAction<boolean>>) => {
        menus.current.push({ ref, setToggle });
    };


    // cleanup
    const removeMenu = (ref: RefObject<MenuRefType>) => {
        const index = menus.current.findIndex((menu) => menu.ref === ref);
        if (index !== -1) {
            menus.current.splice(index, 1);
        }
    };

    return { addMenu, removeMenu };
};


/**
 * For multiple nested overlay menus:
 *
 * Usage:
 * - Create a new component for each (menu/nested_menu).
 * - Use useRef for the menu container.
 * - Utilize useClickOutside to manage click events outside the menu.
 *
 * Example:
 * const menuRef = useRef<HTMLDivElement>(null);
 * const { addMenu, removeMenu } = useClickOutside();
 *
 * useEffect(() => {
 *     addMenu(menuRef, setShowMenu);
 *     return () => { removeMenu(menuRef); }
 * }, [addMenu, removeMenu, setShowMenu]);
 * 
 * // Include the ref in your menu container
 * <div ref={menuRef} ... >
 * 
 * Extras:
 * - If you have a modal toggler inside the menu, pass the modal toggle state to disable menu closure when the modal is open.
 *   Example: const { addMenu, removeMenu } = useClickOutside(your_toggler_state: boolean);

 */
