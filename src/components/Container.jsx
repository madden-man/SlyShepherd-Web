

export const Container = ({ width = 32, className, children }) =>
    <div style={{ maxWidth: `${width}rem`, textAlign: 'left', margin: 'auto'}} className={className}>
        {children}
    </div>