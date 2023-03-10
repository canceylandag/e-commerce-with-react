import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


const Category = () => {
  const categories = useSelector((state:RootState) => state.products.categories);

  return (
    <div className="c-item-01">
      <div className="c-item-01-A">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_107_5)">
            <path
              d="M24.0413 22.156L29.752 27.8653L27.8653 29.752L22.156 24.0413C20.0316 25.7443 17.3893 26.6705 14.6667 26.6666C8.04266 26.6666 2.66666 21.2906 2.66666 14.6666C2.66666 8.04263 8.04266 2.66663 14.6667 2.66663C21.2907 2.66663 26.6667 8.04263 26.6667 14.6666C26.6705 17.3893 25.7443 20.0316 24.0413 22.156ZM21.3667 21.1666C23.0588 19.4265 24.0038 17.0939 24 14.6666C24 9.50929 19.8227 5.33329 14.6667 5.33329C9.50932 5.33329 5.33332 9.50929 5.33332 14.6666C5.33332 19.8226 9.50932 24 14.6667 24C17.0939 24.0038 19.4265 23.0588 21.1667 21.3666L21.3667 21.1666Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_107_5">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <input
          type="text"
          placeholder="Ara..."
          onKeyUp={() => {}}
          className="search-input"
          id="search-input"
        />
      </div>

      <div className="c-item-01-B">
        <div className="c-item-01-A">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_107_5)">
              <path
                d="M24.0413 22.156L29.752 27.8653L27.8653 29.752L22.156 24.0413C20.0316 25.7443 17.3893 26.6705 14.6667 26.6666C8.04266 26.6666 2.66666 21.2906 2.66666 14.6666C2.66666 8.04263 8.04266 2.66663 14.6667 2.66663C21.2907 2.66663 26.6667 8.04263 26.6667 14.6666C26.6705 17.3893 25.7443 20.0316 24.0413 22.156ZM21.3667 21.1666C23.0588 19.4265 24.0038 17.0939 24 14.6666C24 9.50929 19.8227 5.33329 14.6667 5.33329C9.50932 5.33329 5.33332 9.50929 5.33332 14.6666C5.33332 19.8226 9.50932 24 14.6667 24C17.0939 24.0038 19.4265 23.0588 21.1667 21.3666L21.3667 21.1666Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_107_5">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <input
            type="text"
            placeholder="Kategori ara..."
            className="search-input"
            id="search-category-input"
            onKeyUp={() => {}}
          />
        </div>
        <ul id="category-list">
          {[...categories].map((x) => (
            <li><input id={x} style={{margin:"10px"}} type={"checkbox"}/><label htmlFor={x}>{x}</label></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
