import ContextcolorsModule from './contextcolors'
import ContextcolorsController from './contextcolors.controller';
import ContextcolorsComponent from './contextcolors.component';
import ContextcolorsTemplate from './contextcolors.html';

describe('Contextcolors', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContextcolorsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContextcolorsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ContextcolorsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ContextcolorsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContextcolorsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContextcolorsController);
      });
  });
});