import { Container } from "../primitives";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Rare Structure LLC</p>
          <a
            href="/terms"
            target="_blank"
            className="hover:text-text-secondary transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </Container>
    </footer>
  );
}
