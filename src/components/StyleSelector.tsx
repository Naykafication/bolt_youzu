import React from 'react';
import { Check } from 'lucide-react';
import { Style } from '../types';
import { styles } from '../data/styles';

interface StyleSelectorProps {
  selectedStyles: Style[];
  onSelectStyles: (styles: Style[]) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({
  selectedStyles,
  onSelectStyles,
}) => {
  const toggleStyle = (style: Style) => {
    if (selectedStyles.includes(style)) {
      onSelectStyles(selectedStyles.filter((s) => s !== style));
    } else {
      onSelectStyles([...selectedStyles, style]);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {styles.map(({ id, name, description, image, features }) => {
        const isSelected = selectedStyles.includes(id);

        return (
          <button
            key={id}
            onClick={() => toggleStyle(id)}
            className={`
              relative group rounded-xl overflow-hidden transition-all duration-300
              ${isSelected ? 'ring-4 ring-indigo-600 ring-offset-2' : 'hover:ring-2 hover:ring-indigo-300 hover:ring-offset-2'}
            `}
          >
            <div className="aspect-square">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-white font-semibold mb-1">{name}</h3>
                <p className="text-sm text-white/80 line-clamp-2">{description}</p>
              </div>

              {isSelected && (
                <div className="absolute top-2 right-2 bg-indigo-600 rounded-full p-1.5 shadow-lg">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/80 p-4 rounded-lg backdrop-blur-sm">
                  <ul className="text-sm text-white space-y-1">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};