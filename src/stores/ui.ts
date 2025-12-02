// CineVerse UI Store
import { atom } from 'nanostores';

export const $isSidebarOpen = atom<boolean>(false);
export const $isSearchModalOpen = atom<boolean>(false);
export const $isPlayerTheaterMode = atom<boolean>(false);
export const $isMobileMenuOpen = atom<boolean>(false);

export function toggleSidebar() {
    $isSidebarOpen.set(!$isSidebarOpen.get());
}

export function toggleSearchModal() {
    $isSearchModalOpen.set(!$isSearchModalOpen.get());
}

export function toggleTheaterMode() {
    $isPlayerTheaterMode.set(!$isPlayerTheaterMode.get());
}

export function toggleMobileMenu() {
    $isMobileMenuOpen.set(!$isMobileMenuOpen.get());
}

export function closeMobileMenu() {
    $isMobileMenuOpen.set(false);
}

export function closeSearchModal() {
    $isSearchModalOpen.set(false);
}
