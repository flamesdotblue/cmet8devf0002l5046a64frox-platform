import BrandHero from './components/BrandHero';
import CollectionGallery from './components/CollectionGallery';
import DevotionalDetails from './components/DevotionalDetails';
import InvitationSignup from './components/InvitationSignup';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-300/30 selection:text-amber-100">
      <BrandHero />
      <CollectionGallery />
      <DevotionalDetails />
      <InvitationSignup />
      <footer className="border-t border-neutral-800 py-10 text-center text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} FOTTOKOGAE — Fruit of the Tree of Knowledge of Good and Evil</p>
        <p className="mt-1">An homage to scripture; shaped for the present age.</p>
      </footer>
    </div>
  );
}
