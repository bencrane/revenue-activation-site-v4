import { Container } from "../primitives";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-base text-text-muted">
          <p>&copy; {new Date().getFullYear()} Rare Structure LLC</p>
          <div className="flex items-center gap-6">
            <a
              href="tel:929-399-0039"
              className="hover:text-text-secondary transition-colors"
            >
              929-399-0039
            </a>
            <a
              href="/terms"
              target="_blank"
              className="hover:text-text-secondary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              target="_blank"
              className="hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
